"use client";
import React, { useState } from "react";
import { Paintbrush, Palette } from "lucide-react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  onChange: (color: string) => void;
  currentColor?: string;
}

const defaultColors = [
  "#000000", // Black
  "#FFFFFF", // White
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#FFA500", // Orange
  "#808080", // Gray
  "#A52A2A", // Brown
  "#800080", // Purple
];

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange, currentColor }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [customColor, setCustomColor] = useState(currentColor || "#000000");

  const handleColorChange = (color: string) => {
    setCustomColor(color);
    onChange(color);
  };

  return (
    <div className="relative">
      {/* Color Picker Button */}
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Open color picker"
      >
        <Paintbrush className="w-5 h-5" />
      </button>

      {/* Color Picker Dropdown */}
      {showPicker && (
        <div className="absolute z-50 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-64">
          {/* Default Color Palette */}
          <div className="grid grid-cols-6 gap-2 mb-4">
            {defaultColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className="w-6 h-6 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>

          {/* Custom Color Picker */}
          <div className="mb-4">
            <HexColorPicker color={customColor} onChange={handleColorChange} />
          </div>

          {/* Selected Color Preview */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Selected Color:</span>
            </div>
            <div
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: customColor }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;