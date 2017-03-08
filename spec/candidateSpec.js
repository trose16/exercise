describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User('Teako');
    candidate = jasmine.createSpyObj('candidate', ['receiveVote']);
  }) // spyObjects manage dependancies and separation of concerns. beforeEach block keeps the setup of each test easier to read & less cluttered.

  it('should be initialized with a username for identification', function() {
    expect(user.name).toEqual('Teako');
  })

  it('should be able to cast a vote for a candidate', function() {
    user.castVote(candidate);
    expect(candidate.receiveVote).toHaveBeenCalled();
  });

  it('should know who they voted for', function() {
    user.castVote(candidate);
    expect(user.myPicks).toContain(candidate);
  });


});
