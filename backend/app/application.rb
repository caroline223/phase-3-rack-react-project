class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/tasks/) && req.get?
      tasks = Task.all
      return [200, { 'Content-Type' => 'application/json' }, [ tasks.to_json ]]
      #message: taking a message hash and converting it to json server

    elsif req.path.match(/tasks/) && req.post?
     data = JSON.parse  req.body.read #takes sthg that is json and parse it and turn it into ruby
     task = Task.create(data)
     return [200, { 'Content-Type' => 'application/json' }, [ task.to_json ]]


    elsif req.delete?
      id = req.path_info.split("/tasks/").last
      task = Task.find_by(id)
      task.delete

      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Task deleted"}.to_json ]]



    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
