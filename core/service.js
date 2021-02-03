module.exports = {
    handleQuery: (query, statement) => {
        if (!query) {
            return statement;
        }
        let result = statement;

        if (query.fields) {

            const splittedStatement = result.split('*');
            if (splittedStatement && splittedStatement.length > 1) {
                result = splittedStatement[0] + `${query.fields}` + splittedStatement[1]; 
            }
            result = result;
        }

        if (query.limit) {
            result = result + ' LIMIT ' + query.limit;
        }

        if (query.orderBy) {
            result = result + ' ORDER BY ' + query.orderBy;

            const sort = query.sort || 'ASC';
            if (sort) {
                result = result + ' ' + sort;
            }
        }
        return result;
    }
}