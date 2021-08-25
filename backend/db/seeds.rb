require 'faker'
#faker is used to create a mass amount of data quickly

#to create more than one category

10.times do 

end

20.times do
    #sample pulls a random element out of an array 
    id = Category.all.sample.id
    Task.create(text: Faker::Verb.base + " " + Faker::Name.name, category_id: 1)
end