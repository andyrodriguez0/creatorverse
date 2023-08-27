import { createClient } from '@supabase/supabase-js';
const URL = 'https://qpsgzburzeacjjuvlybo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwc2d6YnVyemVhY2pqdXZseWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMjE3MzUsImV4cCI6MjAwNzU5NzczNX0.rO9Xpl98r_P32Nhr_ij-bTHjNhdIaAl069WF86mUDLQ';
const supabase = createClient(URL, API_KEY);
export default supabase;