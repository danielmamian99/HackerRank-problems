const request = require('request');
main();

async function getCountryName(code) {
    const solve = await getUrl(`https://jsonmock.hackerrank.com/api/countries?page=1`);
    const { total_pages, data } = JSON.parse(solve);
    const answer = findInCountries(data, code);
    if (answer) return answer.name;

    for (let i = 2; i <= total_pages; i++) {
        const solves = await getUrl(
            `https://jsonmock.hackerrank.com/api/countries?page=${i}`
        );
        const { data } = JSON.parse(solves);
        const answer = findInCountries(data, code, i);
        if (answer) return answer.name;
    }
}

function findInCountries(countries, code, i = 1) {
    return countries.find((c) => c['alpha2Code'] === code);
} 
function getUrl(url) {
   return new Promise((resolve, reject) => {
      request(url, function(error, response, body) {
         if (error) reject(error)

         else resolve(body)
      });
   });
}
async function main() {
  const code = "AF"
  const name = await getCountryName(code);
  console.log(name);
}