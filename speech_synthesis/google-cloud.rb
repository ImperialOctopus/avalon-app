require "google/cloud/text_to_speech"
client = Google::Cloud::TextToSpeech.new

input_file = "input_lines.txt"
voice = {
  :language_code => "en-US",
  :ssml_gender =>   "FEMALE"
}
audio_config = { :audio_encoding => "MP3" }

output_directory = voice[:language_code] + "_" + voice[:ssml_gender];

unless output_directory == "" then
  Dir.mkdir(output_directory) unless File.exists?(output_directory)
  output_directory += "/"
end

inputfile = File.new(input_file, "r")
inputfile.each_line() { |line|
  line.chomp!
  input_text = { :text => line }
  output_file = output_directory + input_text[:text].gsub(" ", "-").downcase[0..15].chomp("-") + ".mp3"
  #output_file = "hello.mp3"
  response = client.synthesize_speech(input_text, voice, audio_config)
  # The response's audio_content is binary.
  File.open(output_file, "wb") do |file|
    # Write the response to the output file.
    file.write(response.audio_content)
  end

  puts "Successfully acquired: '" + output_file + "'"
}
