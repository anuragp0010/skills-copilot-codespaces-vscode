function skillsMember() {
  // Get the member's skills
  var memberSkills = member.skills;
  // Check if the member has skills
  if (memberSkills) {
    // Get the member's skills
    var skills = memberSkills.skills;
    // Check if the member has skills
    if (skills) {
      // Get the skills
      return skills;
    }
  }
  // Return an empty array
  return [];
}