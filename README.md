<!--
 * @Author: Guo Jingtao
 * @Date: 2025-05-20 13:24:42
 * @LastEditTime: 2025-05-22 16:14:37
 * @LastEditors: Guo Jingtao
 * @Description: A dataset for passenger counting in the upper-decker of a double-decker bus in Hong Kong
 * @FilePath: /RiderCount/README.md
 * 
-->
# RiderCount
A dataset for passenger counting task based on Wi-Fi CSI in the upper-decker of a double-decker bus in Hong Kong

## Overview
RiderCount is a comprehensive dataset designed to support research on Wi-Fi CSI-based passenger counting in the upper-decker of double-decker buses in Hong Kong. This dataset provides annotated data to develop and evaluate Wi-Fi CSI-based sensing algorithms for accurate passenger counting in public transportation systems.

## Dataset Features
- **Real-world conditions**: Captured in actual double-decker buses in Hong Kong
- **Diverse scenarios**: Various bus conditions, passenger densities, and seating arrangements
- **Comprehensive annotations**: Includes passenger positions and counts
- **Privacy-preserving**: Using CSI data derived from Wi-Fi signal to protect passenger identity

## Project Structure
```
RiderCount/
├── index.html         # Main webpage
├── styles.css         # CSS styles
├── script.js          # JavaScript functionality
├── README.md          # This readme file
└── images/            # Image assets
    ├── teaser.png     # Main teaser image
    ├── example1.png   # Example image 1
    ├── example2.png   # Example image 2
    ├── example3.png   # Example image 3
    └── methodology.png # Methodology diagram
```

## Setup Instructions
1. Clone this repository:
   ```
   git clone https://github.com/GuoJingtao-1997/RiderCount.git
   cd RiderCount
   ```

2. To view the website locally, you can use any simple HTTP server:
   ```
   # Using Python 3
   python -m http.server
   
   # Using Python 2
   python -m SimpleHTTPServer
   ```

3. Open your browser and navigate to `http://localhost:8000`

## Deployment
The website can be deployed using GitHub Pages:

1. Go to your repository settings
2. Navigate to the "Pages" section
3. Select the branch you want to deploy (usually `gh-pages`)
4. Save the settings and wait for the deployment to complete

## Website
Visit our [project website](https://GuoJingtao-1997.github.io/RiderCount) for more information, examples, and download instructions.

## Citation
If you use the RiderCount dataset in your research, please cite our paper:

```
@article{ridercount2023,
  title={RiderCount: A Dataset for Passenger Counting in the Upper-Decker of a Double-Decker Bus in Hong Kong},
  author={[Author Names]},
  journal={arXiv preprint arXiv:2410.11400},
  year={2023}
}
```

## License
This dataset is released under [appropriate license information].

## Contact
For questions or inquiries, please contact [contact information].
