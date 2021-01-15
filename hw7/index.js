// ---- Task 1

const searchCandidatesByPhoneNumber = (phone) => {
  return condidateArr.filter((item) =>
    item.phone.match(/\d/g).join("").includes(phone.match(/\d/g).join(""))
  );
};

console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1(869) 40"));
console.log(searchCandidatesByPhoneNumber("43"));
console.log(searchCandidatesByPhoneNumber("+1(869)408-39-82"));

// ---- Task 2

const getCandidateById = (id) => {
  let cond = condidateArr.find((item) => item._id == id);
  cond.registered = cond.registered
    .split("")
    .splice(0, 10)
    .join("")
    .split("-")
    .reverse()
    .join("/");
  return cond;
};

console.log(getCandidateById("5e216bc9a6059760578aefa4"));

// ---- Task 3

const sortCandidatesArr = (sortBy) => {
  let valBalance = (item) => item.balance.slice(1).replace(",", "");
  if (sortBy == "asc") {
    return [...condidateArr].sort((a, b) => valBalance(a) - valBalance(b));
  } else if (sortBy == "desc") {
    return [...condidateArr].sort((a, b) => valBalance(b) - valBalance(a));
  } else {
    return [...condidateArr];
  }
};

console.log(sortCandidatesArr("asc"));
