// A negative number if referenceStr occurs before compareString; positive if the referenceStr occurs after compareString; 0 if they are equivalent.

// coz a comes before b
console.log("a".localeCompare("b"));

// coz b comes after a
console.log("b".localeCompare("a"));

// coz a is a
console.log("a".localeCompare("a"));