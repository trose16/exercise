describe('User', function() {

  var user;
  var candidate;

  beforeEach(function() {
    user = new User('Teako');
    candidate = jasmine.createSpyObj('candidate', ['receiveVote']);
    countMeUp = jasmine.createSpyObj('countMeUp', ['trackVotes'])
  }); // spyObjects manage dependancies and separation of concerns. beforeEach block keeps the setup of each test easier to read & less cluttered.

  it('should be initialized with a username for identification', function() {
    expect(user.name).toEqual('Teako');
  });

  it('should be able to cast a vote for a candidate', function() {
    user.castVote(candidate, countMeUp);
    expect(candidate.receiveVote).toHaveBeenCalled();
    expect(countMeUp.trackVotes).toHaveBeenCalled();
  });

  it('should know who they voted for', function() {
    user.castVote(candidate, countMeUp);
    expect(user.myPicks).toContain(candidate, countMeUp);
  });

  it('should not be able to vote more than 3 times', function() {
    user.myPicks.length = 3;
    expect( function() { user.castVote(candidate); }).toThrow( new Error("Sorry, you can't vote more than 3 times") );
    expect(user.myPicks.length).not.toEqual(4);
  });


});
