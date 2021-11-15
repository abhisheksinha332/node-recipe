export default  (recipes = [], action) =>{
    
   switch(action.type){
       case 'FETCH_ALL':
            return action.payload
       
       case 'CREATE':
            return [...recipes, action.payload]
      
       case 'DELETE':
            return recipes.filter((recipe)=> recipe._id !== action.payload)
       default:
            return recipes
    
   }
}
// eslint-disable-next-line