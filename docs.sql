-- Drop tables in reverse order of dependencies to avoid foreign key constraints issues
DROP TABLE IF EXISTS public.purchases CASCADE;
DROP TABLE IF EXISTS public.artworks CASCADE;
DROP TABLE IF EXISTS public.children_data CASCADE;
DROP TABLE IF EXISTS public.user_data CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Drop custom types
DROP TYPE IF EXISTS public.user_role;

-- Delete all existing authentication data (Note: Caution in production, this clears all users)
DELETE FROM auth.users;

-- Recreate schema objects
CREATE TYPE public.user_role AS ENUM ('admin', 'child', 'user');

CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone_number TEXT,
    role public.user_role DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.children_data (
    child_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE PRIMARY KEY,
    profile_photo_url TEXT NOT NULL,
    bio TEXT,
    age INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.user_data (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE PRIMARY KEY,
    country TEXT,
    total_donated NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.artworks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    child_id UUID REFERENCES public.children_data(child_id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT,
    total_value NUMERIC NOT NULL,     -- e.g., 100
    unit_value NUMERIC NOT NULL,      -- e.g., 5
    max_units INTEGER NOT NULL,       -- e.g., 20
    units_sold INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'disabled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.user_data(user_id) ON DELETE CASCADE NOT NULL,
    artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
    units_purchased INTEGER NOT NULL DEFAULT 1,
    amount_paid NUMERIC NOT NULL,
    stripe_payment_id TEXT,
    invoice_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a function/trigger to auto-disable artwork when units_sold >= max_units
CREATE OR REPLACE FUNCTION update_artwork_status()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.units_sold >= NEW.max_units THEN
        NEW.status = 'disabled';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_artwork_units
BEFORE UPDATE ON public.artworks
FOR EACH ROW
EXECUTE FUNCTION update_artwork_status();

-- Ensure trigger works when purchases occur
CREATE OR REPLACE FUNCTION handle_purchase()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.artworks
    SET units_sold = units_sold + NEW.units_purchased
    WHERE id = NEW.artwork_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_purchase_insert
AFTER INSERT ON public.purchases
FOR EACH ROW
EXECUTE FUNCTION handle_purchase();
