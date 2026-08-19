-- 八上数学互动学习 App - Supabase schema
-- Run this file in Supabase SQL Editor.

create table if not exists public.learning_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  step_id text,
  mastered boolean not null default false,
  correct_count integer not null default 0,
  recap text,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique (user_id, lesson_id)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null,
  question_index integer not null,
  selected_index integer,
  is_correct boolean not null default false,
  feedback text,
  created_at timestamptz not null default now()
);

alter table public.learning_progress enable row level security;
alter table public.quiz_attempts enable row level security;

drop policy if exists "Users can read own learning progress" on public.learning_progress;
create policy "Users can read own learning progress"
on public.learning_progress for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can upsert own learning progress" on public.learning_progress;
create policy "Users can upsert own learning progress"
on public.learning_progress for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can update own learning progress" on public.learning_progress;
create policy "Users can update own learning progress"
on public.learning_progress for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users can read own quiz attempts" on public.quiz_attempts;
create policy "Users can read own quiz attempts"
on public.quiz_attempts for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can insert own quiz attempts" on public.quiz_attempts;
create policy "Users can insert own quiz attempts"
on public.quiz_attempts for insert
to authenticated
with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists learning_progress_updated_at on public.learning_progress;
create trigger learning_progress_updated_at
before update on public.learning_progress
for each row execute function public.set_updated_at();
