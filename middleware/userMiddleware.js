
const examination =  async ({table,paramsId,userId})=>{
    const UserIdTable = await table.findOne({where: {id: paramsId}})
    if(UserIdTable.UserId === userId){
       return true
    }else{
        return false
    }
}
module.exports = examination
