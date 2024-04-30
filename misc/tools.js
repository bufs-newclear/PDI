export async function api(url, body={}, headers={}, token=null) {
    if (typeof url !== 'string') {
        throw new TypeError(`Expected string as url, but got ${typeof url}`)
    }
    if (token !== null && headers['Authorization'] !== undefined) {
        headers['Authorization'] = `Token ${token}`
    }

    const res = await fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        headers: headers
    });

    return res;
}

export async function api_get(url, body={}, headers={}, token=null) {
    if (typeof url !== 'string') {
        throw new TypeError(`Expected string as url, but got ${typeof url}`)
    }
    if (token !== null && headers['Authorization'] !== undefined) {
        headers['Authorization'] = `Token ${token}`
    }

    const res = await fetch(url, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        headers: headers
    });

    return res;
}

