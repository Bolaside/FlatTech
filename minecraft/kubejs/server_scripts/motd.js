PlayerEvents.loggedIn(event => {
  event.player.tell([
    `Welcome to `, Text.red("FlatTech Alpha"), ".\n",
    "This is a test version, expect bugs!"
  ])
})
