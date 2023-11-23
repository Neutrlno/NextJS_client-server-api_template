export const fetchDataFromServer = async (route, cache) => {
    const response = await fetch(route, {
        cache: cache ? 'force-cache' : 'no-store'
    });
    return await response.json();
};
export const fatchDataToServer = (newData, route) => {
    fetch(route, {
        method: 'POST',
        body: JSON.stringify(newData),
    });
};