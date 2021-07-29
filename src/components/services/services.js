export async function getResource (url)  {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export const apiKey = '132095608c2685653ffbc176e0851cd7';