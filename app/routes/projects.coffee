`import Ember from 'ember'`

ProjectsRoute = Ember.Route.extend(
  model: ->
    @store.findAll "project"
)

`export default ProjectsRoute`
