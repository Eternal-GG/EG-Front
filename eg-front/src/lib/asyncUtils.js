const teamNull = {solo: null, duo: null, squad: null};

export const reducerUtilsStats = {
    initial: (initialData = null) => ({
        loading: true,
        stats: initialData,
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        error: null
    }),
    loading: (prevState = null) => ({
        stats: prevState,
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        loading: true,
        error: null
    }),
    success: ({data, mmrInfo, mostCharacterInfo}) => ({
        stats: data,
        mmr: mmrInfo,
        mostCharacter: mostCharacterInfo,
        loading: false,
        error: null,
    }),
    error: (error) => ({
        stats: null,
        mmr: {...teamNull},
        mostCharacter: {...teamNull},
        loading: false,
        error
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