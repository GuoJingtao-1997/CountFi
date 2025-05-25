<!--
 * @Author: Guo Jingtao
 * @Date: 2025-05-20 13:24:42
 * @LastEditTime: 2025-05-25 14:55:18
 * @LastEditors: Guo Jingtao
 * @Description: A dataset for passenger counting in the upper-decker of a double-decker bus in Hong Kong
 * @FilePath: /CountFi/README.md
 * 
-->
# CountFi
A dataset for passenger counting task based on Wi-Fi CSI in the upper-decker of a double-decker bus in Hong Kong

## Overview
CountFi is a comprehensive dataset designed to support research on Wi-Fi CSI-based passenger counting in the upper-decker of double-decker buses in Hong Kong. This dataset provides annotated data to develop and evaluate Wi-Fi CSI-based sensing algorithms for accurate passenger counting in public transportation systems.

## Dataset Features
- **Real-world conditions**: Captured in actual double-decker buses in Hong Kong
- **Diverse scenarios**: Various bus conditions, passenger densities, and seating arrangements
- **Comprehensive annotations**: Includes passenger positions and counts
- **Privacy-preserving**: Using CSI data derived from Wi-Fi signal to protect passenger identity

## Project Structure
```
CountFi/
├── index.html         # Main webpage
├── styles.css         # CSS styles
├── script.js          # JavaScript functionality
├── README.md          # This readme file
└── images/            # Image assets
    ├── 9people.png    # 9 people in the bus
    ├── 20people.png   # 20 people in the bus
    ├── methodology.png   # Methodology diagram
    ├── system_prototype.png   # System prototype
```

## Setup Instructions
1. Clone this repository:
   ```
   git clone https://github.com/GuoJingtao-1997/CountFi.git
   cd CountFi
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
Visit our [project website](https://GuoJingtao-1997.github.io/CountFi) for more information, examples, and download instructions.

## Citation
If you use the CountFi dataset in your research, please cite our paper:

```
@inproceedings{guo2025rssi,
                    title={RSSI-Assisted CSI-Based Passenger Counting with Multiple Wi-Fi Receivers},
                    author={Guo, Jingtao and Zhuang, Wenhao and Mao, Yuyi and Ho, Ivan Wang-Hei},
                    booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
                    pages={1--6},
                    year={2025},
                    organization={IEEE}
                  }
```

## License
This dataset is released under [appropriate license information].

## Contact
For questions or inquiries, please contact [contact information].
