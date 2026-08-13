# TORTEX Email + Mobile OTP Login

Frontend setup includes:
- Login / Signup with email + password
- Forgot password
- Mobile number + SMS OTP
- Premium responsive login modal
- Account panel + logout
- Existing TORTEX cart, WhatsApp, Instagram, motion and 3D design preserved

IMPORTANT:
This GitHub Pages site needs a Supabase project for real authentication.

In index.html replace:
YOUR_SUPABASE_PROJECT_URL
YOUR_SUPABASE_ANON_KEY

Then in Supabase enable:
Authentication -> Providers -> Email
Authentication -> Providers -> Phone
and configure an SMS provider for phone OTP.

Never put a Supabase service_role key in the website. Use only the public anon/publishable key.
