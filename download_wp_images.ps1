
$baseUrl = "https://sbnhealthcaresolution.com/img/"
$images = @("red-white.webp", "white-paper.webp", "white-paper2.webp", "white-paper3.webp", "white-paper1.webp")
$outputDir = "public/img"

foreach ($img in $images) {
    try {
        Invoke-WebRequest -Uri ($baseUrl + $img) -OutFile ("$outputDir/" + $img)
        Write-Host "Downloaded $img"
    } catch {
        Write-Host "Failed to download $img"
    }
}
