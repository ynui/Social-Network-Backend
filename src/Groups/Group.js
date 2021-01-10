class Group {
    constructor(data) {
        this.groupId = data.groupId || null // ID is grenerated by DB
        this.name = data.name
        this.description = data.description
        // this.createTime = data.createTime
        this.createTime = new Date()
        this.createUser = data.createUser
        this.groupManager = data.groupManager || [data.createUser] //list of user, role (admin, advisor)
        this.rulesList = data.rulesList || null // list
        this.rulesTest = data.rulesTest || null
        this.publicity = data.publicity
        this.workingPlace = data.workingPlace || [] // list of [workingPlace, workingPlaceDepartment]. can be only workingPlace without workingPlaceDepartment 
        this.areaOfInterest = data.areaOfInterest || []  // list of [areaOfInterestID, subAreaOfInterest]. can be only areaOfInterest without subAreaOfInterest 
        this.expertise = data.expertise || []  // list of [expertise, subExpertise]. can be only expertise without subExpertise 
        this.demographicInfo = data.demographicInfo || [] // can be  country, county, city, street, can be part of it.... 
        this.users = data.users || []
        this.events = data.events || []
        this.discussion = data.discussion || [] // text/ link/ image / vidio 
    }
    get data() {
        return {
            groupId: this.groupId,
            name: this.name,
            description: this.description,
            createTime: this.createTime,
            createUser: this.createUser,
            rulesList: this.rulesList,
            rulesTest: this.rulesTest,
            publicity: this.publicity,
            workingPlace: this.workingPlace,
            areaOfInterest: this.areaOfInterest,
            expertise: this.expertise,
            demographicInfo: this.demographicInfo,
            groupManager: this.groupManager,
            users: this.users,
            events: this.events,
            discussion: this.discussion
        }
    }
}


module.exports = Group