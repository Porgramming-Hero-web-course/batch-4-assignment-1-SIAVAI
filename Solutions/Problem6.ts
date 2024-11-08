{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (profile: Profile, updates: object): Profile => {
    return { ...profile, ...updates };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  console.log(updateProfile(myProfile, { age: 26 }));
  console.log(updateProfile(myProfile, { name: "Poor Developer" }));
}
