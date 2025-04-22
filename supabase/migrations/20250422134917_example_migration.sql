create table if not exists example_table(
    ud uuid default gen_random_uuid() primary key,
    message text not null
);

insert into example_table (message) values ('First msg.');