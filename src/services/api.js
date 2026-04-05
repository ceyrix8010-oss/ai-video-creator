'use strict';

const fetch = require('node-fetch');

const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models';
const API_TOKEN = 'your_hugging_face_api_token'; // Replace with your token

const apiRequest = async (model, input) => {
    const response = await fetch(`${HUGGING_FACE_API_URL}/${model}", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: input }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
};

module.exports = { apiRequest };