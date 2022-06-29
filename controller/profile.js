exports.fetchProfiles = async (req, res, next) => {
  try {
    res.send('get /profiles/:username')
  } catch (err) {
    next(err)
  }
}

exports.followProfile = async (req, res, next) => {
  try {
    res.send('post /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
}

exports.unfollowProfile = async (req, res, next) => {
  try {
    res.send('delete /profiles/:username/follow')
  } catch (err) {
    next(err)
  }
}