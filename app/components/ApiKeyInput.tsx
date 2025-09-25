const ApiKeyInput = ({ value, onChange }) => {
    return (
        <div className="form-div">
            <label htmlFor="api-key">Gemini API Key</label>
            <input
                type="password"
                name="api-key"
                placeholder="Enter your Gemini API Key"
                id="api-key"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default ApiKeyInput;
