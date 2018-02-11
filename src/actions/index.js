import axios from 'axios';

export const FETCH_IDEAS = 'fetch_ideas';

const IDEA_URL = `https://baza-4be40.firebaseio.com/ideas`;

export function fetchIdeas() {
    return {
        type: FETCH_IDEAS
    };
}