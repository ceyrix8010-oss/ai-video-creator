import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ActivityIndicator } from 'react-native';

const App = () => {
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleCharacterGeneration = () => {
        // Simulate character generation
        setImage('https://example.com/generated-character.jpg'); // Replace with actual image URL
    };

    const handleScriptCreation = () => {
        // Simulate script creation
        console.log('Script created for prompt:', prompt);
    };

    const handleYouTubeUpload = () => {
        setLoading(true);
        // Simulate YouTube upload
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
                return prev + 10;
            });
        }, 1000);
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Character Generation & Script Creation</Text>
            <TextInput
                placeholder='Enter prompt'
                value={prompt}
                onChangeText={setPrompt}
                style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
            />
            <Button title='Generate Character' onPress={handleCharacterGeneration} />
            <Button title='Create Script' onPress={handleScriptCreation} />
            <Button title='Upload to YouTube' onPress={handleYouTubeUpload} />
            {loading && <ActivityIndicator size='large' color='#0000ff' />}
            {uploadProgress > 0 && <Text>Upload Progress: {uploadProgress}%</Text>}
            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}  
        </View>
    );
};

export default App;