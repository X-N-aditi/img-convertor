import Navbar from "../Components/Navbar";
import LeftSidebar from "../Components/LeftSidebar";

function DashboardPage() {
  return (
    <div className="layout">

      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Side */}
      <div className="main-area">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="main-content">

          <h1>All Tools</h1>

          <p className="subtitle">
            Convert your images in just a few clicks
          </p>

          {/* Tools */}
          <div className="tools">

            <div className="tool-card">
              <div className="tool-icon">JPG</div>
              <h3>Image to JPG</h3>
              <p>Convert images to JPG format</p>
              <button>→</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">PNG</div>
              <h3>Image to PNG</h3>
              <p>Convert images to PNG format</p>
              <button>→</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">ICO</div>
              <h3>Image to ICO</h3>
              <p>Convert images to ICO format</p>
              <button>→</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">WEBP</div>
              <h3>Image to WEBP</h3>
              <p>Convert images to WEBP format</p>
              <button>→</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">↔</div>
              <h3>Image Resizer</h3>
              <p>Resize your images in any dimension</p>
              <button>→</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">↓</div>
              <h3>Image Compressor</h3>
              <p>Compress images without losing quality</p>
              <button>→</button>
            </div>

          </div>

          {/* Upcoming Tools */}
          <section className="upcoming">

            <h2>◷ Upcoming Tools</h2>

            <p>
              We're working on these exciting tools for you
            </p>

            <div className="upcoming-tools">

              <div>
                <span>Coming Soon</span>
                <h3>Image to PDF</h3>
                <p>Convert your images to PDF documents</p>
              </div>

              <div>
                <span>Coming Soon</span>
                <h3>Image to GIF</h3>
                <p>Create GIF animations from your images</p>
              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default DashboardPage;