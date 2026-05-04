export const Candidateprofile = () => {

  // JSX Rule 1: You can use JavaScript expressions inside {}
  const name = "Md Firoz";

  // JSX Rule 2: Variables can be dynamically rendered in UI
  const role = "Web Developer";

  const yearsOfExperience = 5;

  // JSX Rule 3: Conditional rendering using ternary operator
  const isAvailable = true;

  return (
    <>
      {/* JSX Rule 4: Must return a single parent element (Fragment used here) */}

      <h2>{name}</h2>

      {/* Expression inside JSX */}
      <p>{role} with {yearsOfExperience} years of Experience</p>

      {/* JavaScript calculation inside JSX */}
      <p>Started in {2025 - yearsOfExperience}</p>

      {/* Conditional rendering */}
      <p>
        Status: {isAvailable ? "Available for hire" : "Not Available"}
      </p>

      {/* JavaScript methods inside JSX */}
      <p>
        Contact: {name.toLowerCase().replace(" ", "-")}@email.com
      </p>
    </>
  );
}

// # JSX Rules

// 1. Must return a single parent element
// 2. JavaScript expressions can be used inside {}
// 3. Use className instead of class
// 4. Conditional rendering using JS logic (ternary)

// ## Example
// - Dynamic rendering
// - String manipulation
// - Conditional UI