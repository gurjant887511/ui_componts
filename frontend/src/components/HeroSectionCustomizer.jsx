import React from 'react';
import { usePlaygroundStore } from '../store/usePlaygroundStore';

function HeroSectionCustomizer() {
  const {
    showHeroSection,
    heroSection,
    setShowHeroSection,
    updateHeroSection,
  } = usePlaygroundStore();

  const handleInputChange = (field, value) => {
    updateHeroSection({ [field]: value });
  };

  const handleNestedChange = (nestedField, field, value) => {
    updateHeroSection({
      [nestedField]: {
        ...heroSection[nestedField],
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Toggle Hero Section */}
      <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">✨ Hero Section</h3>
            <p className="text-gray-400 text-sm mt-1">Display a stylish hero section on your website</p>
          </div>
          <button
            onClick={() => setShowHeroSection(!showHeroSection)}
            className={`px-6 py-2 rounded-lg transition-all font-medium ${
              showHeroSection
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {showHeroSection ? '✓ Enabled' : '✕ Disabled'}
          </button>
        </div>
      </div>

      {showHeroSection && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Customizer Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Content Settings */}
            <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">📝 Content</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Heading</label>
                  <input
                    type="text"
                    value={heroSection.heading}
                    onChange={(e) => handleInputChange('heading', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Subheading</label>
                  <textarea
                    value={heroSection.subheading}
                    onChange={(e) => handleInputChange('subheading', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Primary Button Text</label>
                  <input
                    type="text"
                    value={heroSection.buttonText}
                    onChange={(e) => handleInputChange('buttonText', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">
                    <input
                      type="checkbox"
                      checked={heroSection.showSecondaryButton}
                      onChange={(e) => handleInputChange('showSecondaryButton', e.target.checked)}
                      className="mr-2"
                    />
                    Show Secondary Button
                  </label>
                </div>
              </div>
            </div>

            {/* Color Settings */}
            <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">🎨 Colors</h3>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Background Color</label>
                  <input
                    type="color"
                    value={heroSection.bgColor}
                    onChange={(e) => handleInputChange('bgColor', e.target.value)}
                    className="w-full h-10 cursor-pointer rounded-lg border border-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Text Color</label>
                  <input
                    type="color"
                    value={heroSection.textColor}
                    onChange={(e) => handleInputChange('textColor', e.target.value)}
                    className="w-full h-10 cursor-pointer rounded-lg border border-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Button Color</label>
                  <input
                    type="color"
                    value={heroSection.buttonColor}
                    onChange={(e) => handleInputChange('buttonColor', e.target.value)}
                    className="w-full h-10 cursor-pointer rounded-lg border border-gray-600"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">Accent Color</label>
                  <input
                    type="color"
                    value={heroSection.accentColor}
                    onChange={(e) => handleInputChange('accentColor', e.target.value)}
                    className="w-full h-10 cursor-pointer rounded-lg border border-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Height Settings */}
            <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">📐 Height</h3>

              <div className="space-y-2">
                {[
                  { value: 'full', label: '🖥️ Full Screen', desc: '100vh height' },
                  { value: 'half', label: '📊 Half Screen', desc: '50vh height' },
                  { value: 'auto', label: '📏 Auto', desc: 'Content height' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleInputChange('height', opt.value)}
                    className={`w-full p-2 rounded-lg border transition-all text-left text-sm ${
                      heroSection.height === opt.value
                        ? 'bg-purple-600/30 border-purple-500'
                        : 'bg-gray-800/30 border-gray-700 hover:border-purple-500/50'
                    }`}
                  >
                    <div className="font-medium text-white">{opt.label}</div>
                    <div className="text-xs text-gray-400">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg overflow-hidden">
              <div
                className={`relative ${
                  heroSection.height === 'full'
                    ? 'min-h-screen'
                    : heroSection.height === 'half'
                    ? 'min-h-96'
                    : 'min-h-48'
                } flex items-center justify-center px-8 py-12`}
                style={{
                  background: heroSection.backgroundImage,
                  color: heroSection.textColor,
                }}
              >
                {/* Decorative elements */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
                  style={{
                    backgroundColor: heroSection.accentColor,
                    filter: 'blur(80px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
                  style={{
                    backgroundColor: heroSection.buttonColor,
                    filter: 'blur(80px)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 text-center max-w-3xl">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    {heroSection.heading}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                    {heroSection.subheading}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center flex-wrap">
                    <button
                      className="px-8 py-4 rounded-lg transition-all font-semibold text-lg hover:opacity-90"
                      style={{
                        backgroundColor: heroSection.buttonColor,
                        color: heroSection.bgColor,
                      }}
                    >
                      {heroSection.buttonText}
                    </button>
                    {heroSection.showSecondaryButton && (
                      <button
                        className="px-8 py-4 rounded-lg transition-all font-semibold text-lg hover:opacity-80"
                        style={{
                          backgroundColor: 'transparent',
                          color: heroSection.textColor,
                          border: `2px solid ${heroSection.accentColor}`,
                        }}
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-black/50 px-6 py-4 border-t border-gray-700">
                <p className="text-xs text-gray-400">
                  💡 <strong>Preview:</strong> Your hero section will look exactly like this with all customizations.
                </p>
              </div>
            </div>

            {/* Code Display */}
            <div className="mt-6 bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">💻 Hero Code</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-xs text-cyan-400 max-h-64">
                {`<section style={{
  background: '${heroSection.backgroundImage}',
  color: '${heroSection.textColor}',
  minHeight: '${heroSection.height === 'full' ? '100vh' : heroSection.height === 'half' ? '50vh' : 'auto'}',
}} className="flex items-center justify-center px-8 py-12">
  <div className="text-center max-w-3xl">
    <h1 className="text-6xl font-bold mb-6">
      ${heroSection.heading}
    </h1>
    <p className="text-2xl mb-10 opacity-90">
      ${heroSection.subheading}
    </p>
    <div className="flex gap-4 justify-center">
      <button style={{ backgroundColor: '${heroSection.buttonColor}' }}>
        ${heroSection.buttonText}
      </button>
      ${heroSection.showSecondaryButton ? `<button style={{ border: '2px solid ${heroSection.accentColor}' }}>
        Learn More
      </button>` : ''}
    </div>
  </div>
</section>`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSectionCustomizer;
