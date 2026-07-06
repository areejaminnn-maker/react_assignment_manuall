// Static team data — used to demonstrate all six JS/JSX prop types:
// string, number, boolean, array, object, and (separately, in App.jsx) function.
const team = [
  {
    id: 1,
    name: 'Areej Amin',
    role: 'React Developer',
    age: 20,
    isAdmin: true,
    skills: ['React', 'JavaScript', 'CSS'],
    address: { city: 'Lahore', country: 'Pakistan' },
  },
  {
    id: 2,
    name: 'Bilal Khan',
    role: 'Backend Engineer',
    age: 29,
    isAdmin: true,
    skills: ['Node.js', 'PostgreSQL', 'Docker'],
    address: { city: 'Karachi', country: 'Pakistan' },
  },
  {
    id: 3,
    name: 'Dur e Zahra',
    role: 'UI/UX Designer',
    age: 26,
    isAdmin: false,
    skills: ['Figma', 'Design Systems', 'Prototyping'],
    address: { city: 'Islamabad', country: 'Pakistan' },
  },
  {
    id: 4,
    name: 'Mustafa',
    role: 'DevOps Engineer',
    age: 31,
    isAdmin: false,
    skills: ['AWS', 'Kubernetes', 'CI/CD'],
    address: { city: 'Faisalabad', country: 'Pakistan' },
  },
  {
    id: 5,
    name: 'Nawal Ahmed',
    role: 'QA Engineer',
    age: 27,
    isAdmin: false,
    skills: ['Cypress', 'Jest', 'Manual Testing'],
    address: { city: 'Multan', country: 'Pakistan' },
  },
  {
    id: 6,
    name: 'Omar Farooq',
    role: 'Product Manager',
    age: 33,
    isAdmin: false,
    skills: ['Roadmapping', 'Agile', 'Stakeholder Comms'],
    address: { city: 'Rawalpindi', country: 'Pakistan' },
  },
]

export default team
