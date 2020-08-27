function newDate( data ){
    data.createdAt = new Date ()
    data.updatedAt = new Date()

    return data
}

module.exports = {newDate}