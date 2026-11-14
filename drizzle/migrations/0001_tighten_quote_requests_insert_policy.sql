-- Only let visitors fill in the form fields; id and created_at are set by the database.
REVOKE INSERT ON public.quote_requests FROM anon;
GRANT INSERT (name, email, phone, department, details, message) ON public.quote_requests TO anon;

DROP POLICY IF EXISTS "Anyone can submit a quote request" ON public.quote_requests;

CREATE POLICY "Visitors can submit a valid quote request"
ON public.quote_requests
FOR INSERT
TO anon
WITH CHECK (
  char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) BETWEEN 3 AND 160
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND department IN ('Computer Sales', 'Computer Repair', 'Vehicle Sales', 'Automotive Repair')
  AND (details IS NULL OR char_length(details) <= 200)
  AND char_length(btrim(message)) BETWEEN 1 AND 2000
);