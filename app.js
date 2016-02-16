//sequelize
var Sequelize = require('sequelize');

//database wide options
var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        //freezeTableName: true,
        //add a time attribute
        //timestamps: true
    }
}
var connection = new Sequelize('raptroopdb','root','strongpassword', opts);
	
// connect / make a table entry if not existing
connection.sync();

//user-
var User = connection.define('user', {

	email: Sequelize.STRING,
	k: Sequelize.STRING,
	fname: Sequelize.STRING,
	lname: Sequelize.STRING,	
	username: Sequelize.STRING,
	summary: Sequelize.STRING,
	
	messagesSent: Sequelize.INTEGER,
	numCollabs: Sequelize.INTEGER,
	successfulCollabs: Sequelize.INTEGER,
	followers: Sequelize.INTEGER,
	following: Sequelize.INTEGER,
	rating: Sequelize.INTEGER,
	
	isShowingSoc: Sequelize.BOOLEAN,
	isShowingLoc: Sequelize.BOOLEAN,
	isShowingSO: Sequelize.BOOLEAN,
	isSuspended: Sequelize.BOOLEAN,
	isBanned: Sequelize.BOOLEAN,
	isAuth: Sequelize.BOOLEAN,
	dob: Sequelize.BOOLEAN
});

// self references
// this will add the attribute FollowerId to User
User.hasOne(Person, {as: 'Follower'})


//collab-
var Collab = connection.define('collab', {
	type: Sequelize.STRING,
	state: Sequelize.STRING,
	
	reward: Sequelize.INTEGER
});

// One-way associations
Collab
  .hasOne(User)
  .hasOne(messageThread)
  .hasOne(Attachment)



//collab-
var MessageThread = connection.define('messagethread', {
	type: Sequelize.STRING,
	state: Sequelize.STRING,
	
	reward: Sequelize.INTEGER
});





/*
  hasOne will add an attribute ProjectId to the User model!
  Furthermore, Project.prototype will gain the methods getUser and setUser according
  to the first parameter passed to define. If you have underscore style
  enabled, the added attribute will be project_id instead of ProjectId.
 
  You can also define the foreign key, e.g. if you already have an existing
  database and want to work on it:
*/

Project.hasOne(User, { foreignKey: 'initiator_id' })





// Insert a record into the table using javascript promises.
connection.sync().then(function () {
	
	User.create({
	

		email: 'dumdum@gmail.com',
		k: 'weu8wbo4021',
		fname: 'Joel',
		lname: 'Ross',
		username: 'Gutterman',
		summary: 'I love music and money!'
	
	});
	
});




