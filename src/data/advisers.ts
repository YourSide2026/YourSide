// The YourSide advisers. Each one gets their own page at /team/<slug>/.
// Replace the placeholder bios once the "meet the team" profiles are final.
// To add a photo, put it in /public/team/ and set photo: '/team/dan.jpg'.
export type Adviser = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  specialties: string[];
  photo: string | null;
  phone: string | null;
  email: string | null;
};

export const advisers: Adviser[] = [
  {
    slug: 'dan',
    name: 'Dan',
    role: 'Mortgage Adviser',
    bio: ['Profile coming soon. Dan’s full “meet the team” profile will be added here before launch.'],
    specialties: ['First home buyers', 'Refinancing', 'Upgrading'],
    photo: null,
    phone: null,
    email: null,
  },
  {
    slug: 'jorja',
    name: 'Jorja',
    role: 'Mortgage Adviser',
    bio: ['Profile coming soon. Jorja’s full “meet the team” profile will be added here before launch.'],
    specialties: ['First home buyers', 'Upgrading', 'Investment'],
    photo: null,
    phone: null,
    email: null,
  },
  {
    slug: 'callan',
    name: 'Callan',
    role: 'Mortgage Adviser',
    bio: ['Profile coming soon. Callan’s full “meet the team” profile will be added here before launch.'],
    specialties: ['Investment', 'Business lending', 'Refinancing'],
    photo: null,
    phone: null,
    email: null,
  },
  {
    slug: 'bridie',
    name: 'Bridie',
    role: 'Mortgage Adviser',
    bio: ['Profile coming soon. Bridie’s full “meet the team” profile will be added here before launch.'],
    specialties: ['First home buyers', 'Refinancing', 'Business lending'],
    photo: null,
    phone: null,
    email: null,
  },
];
