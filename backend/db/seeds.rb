require 'faker'
#faker is used to create a mass amount of data quickly

#to create more than one category

30.times do
    Author.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

300.times do
    #sample pulls a random element out of an array 
    id = Author.all.sample.id
    Book.create(title: Faker::Book.title, genre: Faker::Book.genre, publishing_date: Faker::Date.backward, author_id: id)
end