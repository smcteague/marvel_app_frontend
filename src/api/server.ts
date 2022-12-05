let token = localStorage.getItem('token') // <-- thanks Alex! :)

export const myServerCalls = {
    get: async () => {
        const response = await fetch(`https://dynamic-bush-group.glitch.me/api/characters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any) => {
        const response = await fetch(`https://dynamic-bush-group.glitch.me/api/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },
    udpate: async (id: string, data: any) => {
        const response = await fetch(`https://dynamic-bush-group.glitch.me/api/characters/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        });
    },    
    delete: async (id: string) => {
        const response = await fetch(`https://dynamic-bush-group.glitch.me/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            },
        });
    },
}


