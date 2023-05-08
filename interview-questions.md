# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:


> To fix this mistake you will need to create a migration. To do this run the command `rails generate migration <name_of_migration>`. For this instance, the following name would suffice: AddForeignKeyColumnToStudent. This command will create a file inside the `migrations` folder with a time-stamp and name of the migration. Inside the file will be a block of code. Inside the block you can tell rails how you want to change your database structure. To add a column to a table you can use the following command `add_column :table_name, :new_column_name`. In this case we would want to type `add_column :student, :cohort_id` Now to make the changes run `rails db:migrate` to run the migration. The foreign key will be named `cohort_id` since each cohort has_many students and located in the student table. 

Researched answer:

> To add the foreign key to the Student model, you can generate a migration that adds a `cohort_id` column to the students table. Here are the steps:
>
> 1. Generate a migration to add the cohort_id colums to the students table:
>
>    ```bash
>    rails generate AddCohortIdToStudents
>    ```
>
>    This will generate a migration file located in `db/migrate`. The file will be named with a time stamp followed by the migration name. The file will have a method called `change`.
>
>    ```ruby
>    class AddCohortIdToStudents < ActiveRecord::Migration[7.0]
>      def change
>      end
>    end
>    ```
>
>2. Write the migration
>
>    In the `change` method write the following command:
>
>    ```ruby
>    add_column :students, :cohort_id, :integer
>    ```
>
>    This will add a column called `cohort_id` to the `students` table and have a data type of integer.
>
> 3. Run the migration
>
>    ```bash
>    rails db:migrate
>    ```
>
>    This will create the `cohort_id` column in the `students` table and add the foreign key constraint.
>
>    The name of the foreign key would be `cohort_id`, as this is the name of the column that references the `id` column in the `cohorts` table.
>
>    The foreign key would be on the `Student` model, as it references the `id` column in the `Cohort` model. The `Cohort` model does not need to have any reference to the `Student` model.

2. Which RESTful routes must always be passed params? Why?

Your answer:

> RESTful routes that must always be passed params are:
> 1. `show` - you need an `id` to find the record
> 2. `delete` - you need an `id` to fine the record to delete
> 3. `update` - you need an `id` to find the record to update

Researched answer:

> In a RESTful application, not all routes require parameters to be passed in. However, there are some routes that typically require parameters to be passed in, as they involve specific resources or actions. Here are some examples:
> 
> 1. `POST` requests to create a resource: When you create a new resource, you typically need to pass in data to define the resource. For example, when creating a new user, you might pass in a name, email, and password.
> 
> 2. `PUT` or `PATCH` requests to update a resource: When you update an existing resource, you typically need to pass in the updated data for that resource. For example, when updating a user, you might pass in a new email address.
> 
> 3. `DELETE` requests to delete a resource: When you delete a resource, you typically need to pass in a way to identify the resource to be deleted. For example, when deleting a user, you might pass in the user's ID.
> 
> 4. `GET` requests for a specific resource: When you want to retrieve a specific resource, you typically need to pass in a way to identify the resource. For example, when retrieving a user's profile, you might pass in the user's ID.
>
> These routes typically require parameters to be passed in to specify which resource is being acted upon. If these parameters are not passed in, the server won't know which resource to create, update, delete or retrieve.

3. Name three rails generator commands. What is created by each?

Your answer:

>    The three rails generator commands:
>    1. Model - this will generate a model file
>
>        ```bash
>        rails generate model ModelName column_name:data_type ...
>        ```
>    2. Controller - this will generate a controller file
>
>        ```bash
>        rails generate model ControllerName
>        ```
>    2. Resource - this will generate a model file along with routes
>
>        ```bash
>        rails generate resource ResourceName column_name:data_type ...
>        ```

Researched answer:

> Here are three Rails generator commands along with what they create:
> 
> 1. `rails generate controller <name> [actions]`: This command generates a new controller file in the `app/controllers` directory with the specified name and actions. It also generates corresponding view files in the `app/views` directory for each action specified.
> 
> 2. `rails generate model <name> [fields]`: This command generates a new model file in the `app/models` directory with the specified name and fields. It also generates a migration file in the `db/migrate` directory to create the corresponding database table with the specified fields.
> 
> 3. `rails generate scaffold <name> [fields]`: This command generates a new model, controller, and views for a resource with the specified name and fields. It creates a migration to create the corresponding database table and configures the controller with RESTful routes and actions. It also generates corresponding view templates in the `app/views` directory for each RESTful action. 
> 
> These generator commands can save a lot of time when creating a new Rails application or adding new features to an existing application by generating common code patterns and boilerplate code for you.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

> The controller method would be `index` and it would retrieve all the students.

action: "POST" location: /students

> The controller method would be `create` and it would add a new student.

action: "GET" location: /students/new

> The controller method would be `new` and it would display a form to create a new student.

action: "GET" location: /students/2

> The controller method would be `show` and it would retrieve the student with an ID of 2.

action: "GET" location: /students/2/edit

> The controller method would be `edit` and it would display a form to edit a student with the ID of 2.

action: "PATCH" location: /students/2

> The controller method would be `update` and it would modify the student with the ID of 2.

action: "DELETE" location: /students/2

> The controller method would be `destroy` and it would remove the student with the ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

> 1. As a user, I want to be able to create a new task so that I can keep track of what I need to do.
> 2. As a user, I want to be able to mark a task as complete so that I can keep track of what I have finished.
> 3. As a user, I want to be able to edit a task so that I can update the details if they change.
> 4. As a user, I want to be able to delete a task so that I can remove tasks that are no longer relevant.
> 5. As a user, I want to be able to view all of my tasks so that I can see everything that needs to be done.
> 6. As a user, I want to be able to sort my tasks by priority so that I can focus on the most important tasks first.
> 7. As a user, I want to be able to search for a specific task so that I can quickly find it.
> 8. As a user, I want to be able to add a due date to a task so that I can prioritize my tasks by deadline.
> 9. As a user, I want to be able to add tags to a task so that I can organize my tasks by category.
> 10. As a user, I want to be able to receive notifications when a task is due so that I don't miss any deadlines.
