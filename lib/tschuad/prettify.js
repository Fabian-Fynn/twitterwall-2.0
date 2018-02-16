'use strict'

module.exports = function (schedule) {
  const events = {}
  const rooms = {}

  schedule.included.forEach((r) => {
    if (r.type === "room") {
      rooms[r.id] = {
        id: r.id,
        name: r.attributes.name,
        events: []
      }
    }
  })

  schedule.data.forEach(function (s) {
    const obj = {
      id: s.id,
      name: s.attributes.name,
      start_time: s.attributes.start_time,
      end_time: s.attributes.end_time,
      description: s.attributes.description,
      room: {
        id: rooms[s.relationships.room.data.id].id,
        name: rooms[s.relationships.room.data.id].name
      }
    }

    events[obj.room.id] = events[obj.room.id] || []
    events[obj.room.id].push(obj)
    rooms[obj.room.id].events.push(obj)
  })
  return rooms
}
