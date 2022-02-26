import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  postsData: [
    { id: 1, likes: "228", message: "Abobus" },
    { id: 2, likes: "336", message: "Amogus" },
    { id: 3, likes: "282", message: "Extremumism" },
    { id: 4, likes: "205", message: "Counter-Terrorists Win" },
    { id: 5, likes: "100", message: "Durka" },
  ]
};


it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation 
  expect(newState.postsData.length).toBe(6)
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("it-kamasutra.com");
  

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation 
  expect(newState.postsData[5].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation 
  expect(newState.postsData.length).toBe(4);
});

it('after deleting should not be decrement if id is incorrect', () => {
  // 1. test data
  let action = deletePost(1000);
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation 
  expect(newState.postsData.length).toBe(5);
});




