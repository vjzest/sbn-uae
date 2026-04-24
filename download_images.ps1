
$baseUrl = "https://sbnhealthcaresolution.com/img/"
$images = @("logo.webp", "bg1.webp", "intro-img.webp", "feature1.webp", "feature2.webp", "feature3.webp", "service1.webp", "service2.webp", "service3.webp", "service4.webp")
$outputDir = "public/img"

if (!(Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

foreach ($img in $images) {
    $url = "$baseUrl$img"
    $output = "$outputDir/$img"
    Write-Host "Downloading $url to $output"
    try {
        Invoke-WebRequest -Uri $url -OutFile $output
    } catch {
        Write-Host "Error downloading $img : $_"
    }
}
