PlayerEvents.loggedIn(event => {
  const STAGE_NAME = "receivedStarterItems"
  const { player } = event

  if (!player.stages.has(STAGE_NAME)) {
    player.stages.add(STAGE_NAME)
    player.give(Item.of("tempad:he_who_remains_tempad"))
  }
})
