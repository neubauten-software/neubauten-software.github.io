<?xml version="1.0" encoding="utf-8"?>
<html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
<body>
    <button>
        <xsl:attribute name="id">
            <xsl:value-of select="Button/@Id"/>
        </xsl:attribute>
        <xsl:value-of select="Button/Text"/>
    </button>
</body>
</html>
