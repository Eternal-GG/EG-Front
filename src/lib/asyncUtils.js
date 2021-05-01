const teamNull = {solo: null, duo: null, squad: null};

export const reducerUtilsStats = {
    initial: () => ({
        loading: true,
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        restInfo: {...teamNull},
        error: null
    }),
    loading: () => ({
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        restInfo: {...teamNull},
        loading: true,
        error: null
    }),
    success: ({mmrInfo, mostCharacterInfo, restInfo}) => ({
        mmr: mmrInfo,
        mostCharacter: mostCharacterInfo,
        restInfo,
        loading: false,
        error: null,
    }),
    error: (error) => ({
        stats: null,
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        restInfo: {...teamNull},
        loading: false,
        error:error.message,
    })
};

export const reducerUtilsGames = {
    initial: (initialData = null) => ({
        data: [],
        loading: true,
        error: initialData
    }),
    loading: (prevState = null) => ({
        data: [],
        loading: true,
        error: null
    }),
    success: ({data}) => ({
        data,
        loading: false,
        error: null,
    }),
    error: (error) => ({
        data: [],
        loading: false,
        error
    })
};