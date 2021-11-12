/*

Below isn't correct, use disjoint sets to solve it easily

*/
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

 var accountsMerge = function(accounts) {
	const data = {};
	for(let i = 0; i < accounts.length; i++) {
		const account = accounts[i];
		if(account.length === 1) continue;
		const name = account[0];
		if(name in data) {
            data[name].push(account.slice(1));
        } else {
            data[name] = [account.slice(1)];
        }
    }
    const result = [];
    for(const [name, emailsArr] of Object.entries(data)) {
        const visited = {};
        const local = [];
        for(const emails of emailsArr) {
            const [present, emailPresent] = checkIfPresent(visited, emails);
            if(present) {
                for(const email of emails) {
                    const index = visited[emailPresent];
                    local[index][email] = true;
                    visited[email] = index;
                }
            } else {
                local.push(convertToMap(emails));
                for(const email of emails) {
                    visited[email] = local.length - 1;
                }
            }
        }
        
        for(let i = 0; i < local.length; i++) {
            let semiResult = [name];
            const emails = Object.keys(local[i]);
            emails.sort();
            for(const email of emails) {
                semiResult.push(email);
            }
            result.push(semiResult);
        }
    }
    return result;
}

function checkIfPresent(visited, emails) {
    for(const email of emails) {
        if(email in visited) return [true, email];
    }
    return [false, null];
}

function convertToMap(emails) {
	const result = {};
	for(const email of emails) {
		result[email] = true;
	}
	return result;
}
