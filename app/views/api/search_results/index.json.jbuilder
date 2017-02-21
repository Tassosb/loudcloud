json.array! @search_results do |search_result|
  json.id search_result.id
  if (search_result.class == User)
    json.name search_result.name
  elsif (search_result.class == Track)
    json.title search_result.title
  end
end
